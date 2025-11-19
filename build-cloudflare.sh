#!/bin/bash

# Cloudflare Pages Build Script
# Este script garante que o build seja executado corretamente

echo "======================================"
echo "🚀 Starting Cloudflare Pages Build"
echo "======================================"

# 1. Verificar versão do Node
echo "📦 Node version:"
node --version

# 2. Verificar versão do npm
echo "📦 npm version:"
npm --version

# 3. Limpar cache anterior (se existir)
echo "🧹 Cleaning previous build..."
rm -rf dist node_modules/.vite

# 4. Instalar dependências
echo "📥 Installing dependencies..."
npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# 5. Executar build
echo "🔨 Building project..."
npm run build

# 6. Verificar se dist foi criado
echo "✅ Checking build output..."
if [ -d "dist" ]; then
    echo "✅ dist directory created successfully"
    ls -la dist/

    # Verificar se index.html existe
    if [ -f "dist/index.html" ]; then
        echo "✅ index.html found"
        echo "📄 First few lines of dist/index.html:"
        head -n 10 dist/index.html
    else
        echo "❌ ERROR: index.html not found in dist!"
        exit 1
    fi

    # Verificar se há arquivos JS
    if ls dist/assets/*.js 1> /dev/null 2>&1; then
        echo "✅ JavaScript files found:"
        ls -lh dist/assets/*.js
    else
        echo "❌ ERROR: No JavaScript files found in dist/assets!"
        exit 1
    fi
else
    echo "❌ ERROR: dist directory was not created!"
    exit 1
fi

echo "======================================"
echo "✅ Build completed successfully!"
echo "======================================"
