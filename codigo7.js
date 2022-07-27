function subscription(type, bennefits){
    this.type = type;
    this.bennefits = bennefits;
}

let subscription1 = new subscription("Free","Solo puedes tomar los cursos gratis");
let subscription2 = new subscription("Basic","Puedes tomar casi todos los cursos de Platzi durante un mes");
let subscription3 = new subscription("Expert","Puedes tomar todos los cursos de Platzi durante un año");
let subscription4 = new subscription("ExpertPlus","Tú y alguien más pueden tomar TODOS los cursos de PLATZI durante un año");

let subscriptions = [subscription1, subscription2, subscription3, subscription4];

let selection = "Basic";

for (let subscription of subscriptions){
    if (subscription.type == selection){
        console.log(subscription.bennefits);
    }
}
