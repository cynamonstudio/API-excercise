const usersApi = "https://jsonplaceholder.typicode.com/users" 

fetch(usersApi)
.then((data)=>{return data.json()})
.then((jsonData)=>{return jsonData})
.then((objectsArray)=>{
    let value = Number( prompt("Choose user ID (from 0 to 9)") )
    function renderList(){
        createCard(createBlock,objectsArray,[0,3],value)
        createMoreButton('more info',document.querySelector(".card-container"))
        styleAllElements()
        document.querySelector(".button").addEventListener("click",()=>{
            createCard(createBlock,objectsArray,[3,6],value)
            styleAllElements()
            document.querySelector(".button").style.display="none"
        })
    }
   if( value>9 || value < 0){
        alert("Wrong value. Try again")
        value = Number( prompt("Choose user ID (from 0 to 9") )
        renderList()
   } else {
       renderList()
   }    
})





function createMoreButton(string,parent){
    let button= document.createElement('button')
    button.classList.add("button")
    button.innerHTML=string
    parent.appendChild(button)
}


function createCard(callback,inputArray,[start,end],userId){
    let cardElement = document.createElement('div')
    cardElement.classList.add('card-container')
    document.body.appendChild(cardElement)
       
    const keysArray=["name","username","email",'city', 'street', 'zipcode']
    
       for (let i=start;i<end;i++){
        if(i>=3){
            let keyName =  keysArray[i]
            const textInput = inputArray[userId].address[keyName]
            callback(cardElement,keyName,textInput)
        }else{
            let keyName =  keysArray[i]
           const textInput = inputArray[userId][keyName]
           callback(cardElement,keyName,textInput)
        }
           
       }
}


function createBlock(parent,title,text){
    let titleEl= document.createElement('p')
    titleEl.classList.add("title")
    titleEl.innerHTML=title
    parent.appendChild(titleEl)

    let textEl= document.createElement('p')
    textEl.classList.add("text")
    textEl.innerHTML=text
    parent.appendChild(textEl)
}



function css(selector,array){
    array.forEach(styleObj=>{
        for([key,value] of Object.entries(styleObj)){
         document.querySelectorAll(selector).forEach(el=>el.style[key]=[value] )       
        }
    })
}


function styleAllElements(){

css("*",[
        {"box-sizing":"border-box"},
        {"margin-left":"0px"},
        {"margin-right":"0px"},
])  

css("body",[
        {'padding':'10px'},
        {"background-color":"lightgrey"},
        {'min-height':"100vh"},
        {"display":"flex"},
        {'justify-content':'center'},
        {'align-items':'center'},
        {"transition":"all .5s ease"},
        {"flex-direction":"column"}
])

css(".card-container",[
        {"background-color":"white"},
        {'width':'100%'},
        {'height':'100%'},
        {'max-width':'600px'},
        {'min-height':'10px'},
        {'position':'relative'},
        {'padding':'2%'},
        {'height':'auto'},
     
        
])

css(".title",[
        {'font-size':"11px"},
        {'color':'grey'},
        {'line-height':'10px'},
        {'margin-bottom':'0px'}
])

css(".text",[
        {'font-size':"26px"},
        {'color':'black'},
        {'line-height':'39px'},
        {'width':'100%'},
        { 'border-bottom': '1px solid black'},
        {'margin':'5px'}
])

css(".button",[
        {'font-size':"18px"},
        {'margin-top':"15px"},
        {'float':'right'},
        {'padding':'13px'}, 
        {'color':'white'},
        {"background-color":"black"},
        {'border-radius':'12px'},
])


}
