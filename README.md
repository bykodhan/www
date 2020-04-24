[![Netlify Status](https://api.netlify.com/api/v1/badges/828937f7-bcde-458f-9cb9-c6424a61c36f/deploy-status)](https://app.netlify.com/sites/deepintr/deploys)

## Deepin Türkiye Kullanıcı Topluluğu Web Sitesi

Bu site [Gatsbyjs](https://www.gatsbyjs.org/) ile geliştirilmiş bir statik blog sitesidir. Sitenin kaynak kodlarına [/src](./src) dizini altından, blog içeriklerine [/content/blog](/content/blog) dizininden ulaşılabilir.

### Yerel geliştirme ortamında çalıştırma

- Bilgisayarınızda [git](https://git-scm.com/) ve [nodejs](https://nodejs.org/)'in kurulu olduğundan emin olun.

- Repoyu klonlayın.

  ```bash
  git clone https://github.com/deepintr/www.git deepintr-www
  cd deepintr-www
  ```

- Bağımlılıkları kurun.

  ```bash
  npm install
  ```

- Geliştirme betiğini çalıştırın.

  ```bash
  npm run develop
  ```

- Varsayılan olarak [http://localhost:8000/](http://localhost:8000/) adresinden sunulan siteyi önizleyin.
