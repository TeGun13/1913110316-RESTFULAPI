const info = {name:'Kunyanut' , 
            nickname: 'Gun',
            hobby: 'Drawing',
            address: 'Thai',
            province:{
                province: 'Bangkok',
                postcode: '10440'
            }}

const {name,nickname,hobby,address,province:{province,postcode}} = info

const index = () =>{
    let message1 ="My nick name is "
    let message2 =", My hobby is"
    let message3 ="and my postcode is "
    return `${message1}${nickname}${message2} ${hobby} ${message3}${postcode}`
}

console.log(index())