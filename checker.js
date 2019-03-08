let request = require('request').defaults({
    headers: {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0'}
})

process.argv.forEach(function (val, index, array) {
  let arr = val.split('/')
  if(arr[0] === 'https:'){
     console.log('############################ '+arr[4]+' ############################')
     console.log(val);
     request('https://api.github.com/repos/'+arr[3]+'/'+arr[4]+'/releases/latest',function(error,response,body){
     let json = JSON.parse(body)
     console.log(json.tag_name === undefined? "No releases" : json.tag_name)
     console.log(json.published_at)
     console.log('############################ '+arr[4]+' ############################')
  })}
});
