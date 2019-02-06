import Route from '@ember/routing/route';

function delay(sec) {
return new Promise(reject => setTimeout(reject, sec));
}

export default Route.extend({

  model(params){
      return delay(3000).then(() =>
      {
        console.log("from model after 3 secs")
         //return arr;
    })
  }
});
