// const support = (function () {
//   if (!window.DOMParser) return false
//   const parser = new DOMParser()
//   try {
//     parser.parseFromString('x', 'text/html')
//   } catch (err) {
//     return false
//   }
//   return true
// })()

// export const textToHTML = function (str) {
//   // check for DOMParser support
//   if (support) {
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(str, 'text/html')
//     return doc.body.innerHTML
//   } else {
//     return ''
//   }

//   // Otherwise, create div and append HTML
//   // const dom = document.createElement('div');
//   // dom.innerHTML = str;
//   // return dom;
// }
