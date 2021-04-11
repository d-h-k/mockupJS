let express = require('express'); 
let app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('hello world!! Dong\n');
});

app.get('/users', (req, res) => {
    return res.json(users);
})

app.listen(3030, () => { 
    console.log('app listen at port:3030');
})

let users = [
    {
        id:1,
        name:'Dong'
    },
    {
        id:2,
        name:'Cong'
    }
    ,
    {
        id:3,
        name:'Bong'
    }
    ,
    {
        id:4,
        name:'Aong'
    }
    ,
    {
        id:5,
        name:'FANNG'
    }
    ,
    {
        id:6,
        name:'NKLCB'
    }
    
]