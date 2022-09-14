let card = document.querySelectorAll('.card')
for(cards of card){
    cards.addEvenListener('mouseover', function(event){
        if(event.target.id === "saya"){
            event.target.setAttribute("src", "assets/image/myfoto.jpg");
            return;
        }
    })
}