import $ from 'jquery';
export default function(opt) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: opt.url,
      data: opt.data,
      dataType: 'jsonp',
      success(res) {
        resolve(res);
      },
      error(err) {
        reject(err);
      }
    })
  })
}