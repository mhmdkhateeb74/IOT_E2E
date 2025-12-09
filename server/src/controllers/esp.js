const pool =require('../models/db');
const Esp=require("../models/esp");


const esp= new Esp(pool);

const sensors=[];

const createAvgsensor=  async (req,res) =>
{
    try
    {
        const data =req.body;
    

        for (let k = 0; k < sensors.length; k++) {
            let item={};
            for (let i = 0; i < data.length; i++) {
             
            item ={
            
                name:data[i].name,
                val:[...sensors[k].val,data[i]]
            }
                

                
            }
            sensors[k]=item;
            
        }

    

    }catch(error)
    {

    }


}
