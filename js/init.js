// Redirect if connection is not secure.
if (location.protocol !== 'https:') location.protocol = 'https:';

// Trivial link redirect :)
var queryStr = location.search.substring(location.search.indexOf('?') + 1).toLowerCase();
var requestedLink;
switch (queryStr) {
  case 'spectrum':
    requestedLink = 'https://spectrum.chat/deepintr';
    break;
  case 'telegram':
    requestedLink = 'https://t.me/deepintr';
    break;
  case 'github':
    requestedLink = 'https://github.com/deepintr';
    break;
  case 'youtube':
    requestedLink = 'https://www.youtube.com/channel/UCvd1FPyxqwveRB50tOtbAGQ';
    break;
  case 'distrowatch':
    requestedLink = 'https://distrowatch.com/table.php?distribution=deepin';
    break;
  case 'download1':
    requestedLink = 'http://cdimage.deepin.com/releases/15.8/deepin-15.8-amd64.iso';
    break;
  case 'download2':
    requestedLink = 'https://drive.google.com/drive/folders/1bt5CQNuQxSQ6K0Ryo-YFgYnlRzTqeOSp?usp=sharing';
    break;
  // Turkish links
  case 'linux-deepin-casus-yazilim-degildir':
    requestedLink = 'https://spectrum.chat/deepintr?thread=3b0ae224-2877-413f-818c-87e16ce1a7c4';
    break;
  case 'sss':
    requestedLink = 'https://spectrum.chat/deepintr?thread=9b557ba5-57e2-411e-a703-e4c8472a3cb3';
    break;
  case 'linux-deepin-kurulumu':
    requestedLink = 'https://spectrum.chat/deepintr?thread=9cbd6db3-1080-45bb-9122-a05c07bb9621';
    break;
  // English links
  case 'welcome-to-linux-deepin-turkey-community':
    requestedLink = 'https://spectrum.chat/deepintr/international?thread=7620b4b9-26ca-4c2c-ab7b-b981c17018f3';
    break;
  case 'faq':
    requestedLink = 'https://spectrum.chat/deepintr/sss-faq?thread=42493eb1-19ad-452c-a0fb-191068b266b6';
    break;
  case 'linux-deepin-is-not-spyware':
    requestedLink = 'https://spectrum.chat/deepintr?thread=1715ba89-fe5f-426a-9496-f26f015c214f';
    break;
}
if (requestedLink) window.location.replace(requestedLink);

// Auto set language pref once.
if (!localStorage.getItem('deepintr_lang_pref')) {
  var currentLang = window.navigator.language.toLowerCase();
  if (currentLang.indexOf('tr') > -1) {
    localStorage.setItem('deepintr_lang_pref', 'tr');
  } else {
    localStorage.setItem('deepintr_lang_pref', 'en');
  }
}