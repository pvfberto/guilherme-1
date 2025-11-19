# 🚀 Guia de Deploy no Cloudflare Pages

## Configurações Necessárias

Ao configurar o projeto no Cloudflare Pages, use as seguintes configurações:

### Build Settings

**Framework preset:** `Vite`

**Build command:**
```
npm run build
```

**Build output directory:**
```
dist
```

**Root directory:**
```
/
```

**Environment variables:**
- `NODE_VERSION`: `18` (ou superior)

## Estrutura de Arquivos

O projeto já inclui os arquivos necessários para o Cloudflare Pages:

- `public/_redirects` - Garante que todas as rotas redirecionem para index.html (necessário para SPA)
- `public/_headers` - Headers de segurança

## Verificação de Problemas

### Página em Branco?

Se a página aparecer em branco após o deploy:

1. **Verifique o console do navegador** (F12 → Console)
   - Erros de JavaScript?
   - Erros 404 em assets?

2. **Verifique as configurações de build:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18+

3. **Verifique os logs do Cloudflare Pages:**
   - Acesse o dashboard do Cloudflare
   - Vá em Workers & Pages → Seu projeto → View build
   - Verifique se o build foi concluído com sucesso

4. **Teste o build localmente:**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

   Se funcionar localmente mas não no Cloudflare, o problema é de configuração.

### Problemas Comuns

**1. Build falha com erro de Node.js**
- Solução: Adicione variável de ambiente `NODE_VERSION=18` no Cloudflare Pages

**2. Build falha com "command not found"**
- Solução: Verifique se o build command está correto: `npm run build`

**3. Assets não carregam (404)**
- Solução: Verifique se o output directory é `dist` (não `build`)

**4. Página em branco sem erros no console**
- Solução: Verifique se o arquivo `public/_redirects` está presente

## Deploy Manual via Wrangler (alternativa)

Se preferir fazer deploy via CLI:

```bash
# Instalar Wrangler
npm install -g wrangler

# Login no Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages publish dist --project-name=seu-projeto
```

## Custom Domain

Após o deploy funcionar:

1. Vá em **Custom domains** no dashboard do Cloudflare Pages
2. Adicione seu domínio
3. Configure os DNS records conforme instruções

## Performance

O Cloudflare Pages automaticamente:
- ✅ Faz cache de assets estáticos
- ✅ Distribui via CDN global
- ✅ Comprime arquivos (Gzip/Brotli)
- ✅ Otimiza imagens

## Troubleshooting Avançado

Se nada funcionar, tente:

1. **Clear build cache:**
   - No dashboard → Settings → Clear build cache

2. **Redeploy:**
   - No dashboard → Deployments → Retry deployment

3. **Verificar branch:**
   - Certifique-se de que está deployando da branch correta

## Suporte

- [Documentação Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [Vite Documentation](https://vitejs.dev/guide/static-deploy.html)
