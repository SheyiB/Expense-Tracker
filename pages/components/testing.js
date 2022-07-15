const pfutdata = []

const data = [  
   {
    _id: '62b8d483520e5b41e1fb49cc',
    item: 'NF Merch',
    price: 50,
    category: 'Fashion',
    date: '2023-12-01T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T21:49:55.855Z',
    updatedAt: '2022-06-26T21:49:55.855Z',
    __v: 0
  },
  {
    _id: '62b8d659520e5b41e1fb49d7',
    item: 'Camo Hoodie',
    price: 20,
    category: 'Fashion',
    date: '2022-09-02T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T21:57:45.566Z',
    updatedAt: '2022-06-26T21:57:45.566Z',
    __v: 0
  },
  {
    _id: '62b8d8dd520e5b41e1fb49e3',
    item: 'Lamp',
    price: 10,
    category: 'Fashion',
    date: '2022-11-01T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T22:08:29.675Z',
    updatedAt: '2022-06-26T22:08:29.675Z',
    __v: 0
  },
  {
    _id: '62b8d9d4520e5b41e1fb49ea',
    item: 'The Purpose Driven Life',
    price: 2,
    category: 'Books',
    date: '2022-03-02T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T22:12:36.700Z',
    updatedAt: '2022-06-26T22:12:36.700Z',
    __v: 0
  },
  {
    _id: '62b8dbe3520e5b41e1fb4a0a',
    item: 'Nivea Cream',
    price: 20,
    category: 'Cosmetics',
    date: '2022-05-11T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T22:21:23.891Z',
    updatedAt: '2022-06-26T22:21:23.891Z',
    __v: 0
  },
  {
    _id: '62b8dc63520e5b41e1fb4a17',
    item: 'Ball',
    price: 5,
    category: 'Play',
    date: '2022-10-10T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T22:23:31.709Z',
    updatedAt: '2022-06-26T22:23:31.709Z',
    __v: 0
  },
  {
    _id: '62b8e143520e5b41e1fb4a2b',
    item: 'Pizza',
    price: 5,
    category: 'Food',
    date: '2022-04-02T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-26T22:44:19.244Z',
    updatedAt: '2022-06-26T22:44:19.244Z',
    __v: 0
  },
  {
    _id: '62ba2225a66aa6f677f48976',
    item: 'Bike',
    price: 20,
    category: 'Flex',
    date: '2022-01-03T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-27T21:33:25.196Z',
    updatedAt: '2022-06-27T21:33:25.196Z',
    __v: 0
  },
  {
    _id: '62ba2795a66aa6f677f48984',
    item: 'Suya',
    price: 2,
    category: 'Food',
    date: '2022-04-04T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-27T21:56:37.328Z',
    updatedAt: '2022-06-27T21:56:37.328Z',
    __v: 0
  },
  {
    _id: '62ba2b62a66aa6f677f4898d',
    item: 'Chicken',
    price: 10,
    category: 'Food',
    date: '2022-02-17T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-27T22:12:50.115Z',
    updatedAt: '2022-06-27T22:12:50.115Z',
    __v: 0
  },
  {
    _id: '62bce205ed29bb159ed00db3',
    item: 'Box',
    price: 10,
    category: 'Misc',
    date: '2022-07-07T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-29T23:36:37.526Z',
    updatedAt: '2022-06-29T23:36:37.526Z',
    __v: 0
  },
  {
    _id: '62bce21ced29bb159ed00db6',
    item: 'Lamp',
    price: 20,
    category: 'Misc',
    date: '2022-08-11T00:00:00.000Z',
    user: '62a9018b3c07aa27a7b8959e',
    createdAt: '2022-06-29T23:37:00.505Z',
    updatedAt: '2022-06-29T23:37:00.505Z',
    __v: 0
  }
]

const randColorGen = () => {
    const list = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let color = '';

    while (color.length < 6){
        color = color + String(list[Math.floor(Math.random() * list.length)]);
    }

    return ('#'+color)
}

function existsInArray(array, item){
        status = false
        for(i in array){
            if(array[i].title == item){
                status = true
            }
        }
        return status
}

function titleIndex( myarray, category) {
    let index = -1                
    for(y in myarray){
        if (myarray[y].title == category) { index = y }
        }
    return index
}

for(let i in data){

    let categories = []
    
    for(let q in pfutdata){
        categories.push(pfutdata[q].title)
    }
   
    if (pfutdata.length == 0 ){
     //   console.log('Initial category')        
        pfutdata.push({title: data[i].category, value: data[i].price, color: randColorGen()})    
    }

    else{
        if( existsInArray(pfutdata, data[i].category) ) {       
//            console.log('Existing category') 
            const theIndex = titleIndex(pfutdata, data[i].category)           
            pfutdata[theIndex].value = pfutdata[theIndex].value + data[i].price
                //console.log(pfutdata[theIndex])
            }
        else{
            //console.log('New category')
            pfutdata.push({title: data[i].category, value: data[i].price, color: randColorGen()})
                
        } 
    
    }}


 console.log('Final Result : ',pfutdata)
    