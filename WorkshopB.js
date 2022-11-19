const User = [
    {name:'Kunyanut' , 
    nickname: 'Gun',
    hobby: 'drawing',
    address: 'Thai',
    province:{
        province: 'Bangkok',
        postcode: '10440'}},

    {name:'Kunyanut' , 
    nickname: 'Korn',
    hobby: 'play Game',
    address: 'Thai',
    province:{
        province: 'Bangkok',
        postcode: '10441'}},

    {name:'Kunyanut' , 
    nickname: 'Guy',
    hobby: 'singing',
    address: 'Thai',
    province:{
        province: 'Bangkok',
        postcode: '10442'}},

]
for (const U of User){
    console.log(`"My nickname is ${U.nickname}, My hobby is ${U.hobby} and my postcode is ${U.province.postcode}"`);
}