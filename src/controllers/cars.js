import{cars} from "../db/db.js";

const CarsController = {
    getCars:(req, res)=>{
        res.send('GET/cars');
    },
    newCar: (req,res)=>{

        const newCar = req.body;
        if(!newCar.brand || !newCar.model ||!newCar.cilindrs ){
           return res.status(400).json({message: 'All fields are require'});
        }
   
        const newCarWid = {
           id: cars.length + 1,
           ...newCar
        }
   
        cars.push(newCarWid);
   
        res.json(newCarWid);
   
    },
    carDelete: (req,res)=>{
        const {id} = req.params;
        cars = cars.filter(car => car.id !==Number (id));
        res.json({message:'Car deleted'});
      },
      carUpdate:(req, res) => {
        const { id } = req.params;
    
        const updatedCar = req.body;
        const updateCarsKeys = Object.keys(updatedCar);
        if (updateCarsKeys.some(key => !['brand', 'model', 'cilindrs'].includes(key))) {
            return res.status(400).json({ message: 'invalid filed' })
        }
    
        cars = cars.map(car => {
            if (car.id === Number(id)) {
                return {
                    ...car,
                    ...updatedCar,
                }
            }
            return car;
        })
        res.json({ message: 'Car update' });
    }
}


export default CarsController;