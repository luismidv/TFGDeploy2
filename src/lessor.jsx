import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import { HeadersRent } from './App';
import { Footeras } from './App';
import { LogProvider } from './LogContext';
import{ useState} from "react";
import { useLessor } from './lessorcontext';


export function Lessor(){
    const navigate = useNavigate();
    const { lessorId } = useLessor();
    const [images, setImages] = useState('');
    const [direction, setDirection] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [rooms, setRooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [metters, setMetters] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
     


    const sendBackendData = async (e) => {
        e.preventDefault();
        try {
          
          const formData = {direction,city,state,rooms,bathrooms,metters,price,description,lessorId};
            
            const response = await fetch('https://tfgserver.onrender.com/api/lessor_room/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(formData),
            });
    
            
            if (!response.ok) {
              console.error("❌ Server responded with an error:", response.status, response.statusText);
              const errorText = await response.text();
              console.error("❌ Error details:", errorText);
              
          } else {
              const result = await response.json();
              console.log("🎉 Success! Response from backend:", result );
              navigate("/lessorpage", {replace: true});
             
              
          }
        }catch (error) {
          console.error("⚠️ Fetch error (caught in catch block):", error);
          alert("Network error occurred! Check the console for details.");
      };
    };
    

  return (
        <LogProvider>
            <HeadersRent></HeadersRent>
                <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                    <div className="relative top-[200px] w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Room registration</h2>
                      {/* THIS CODE REFERS TO THE ROOM PART OF THE FORM */}
                      <h3 className="mb-6 text-center text-2xl font-semibold text-gray-700">Room section</h3>
                      
                      <form onSubmit={sendBackendData} className="space-y-4">
                        <div>
                          <label htmlFor="email-input" className="block text-sm font-medium text-gray-600">
                            Direction
                          </label>
                          <input
                            type="text"
                            id="direction-input"
                            name="direction"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Room direction"
                            required
                            value={direction}
                            onChange={(e) => setDirection(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Rooms state"
                            required
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Rooms city"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="rooms" className="block text-sm font-medium text-gray-600">
                            Rooms
                          </label>
                          <input
                            type="text"
                            id="rooms"
                            name="rooms"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Number of rooms"
                            required
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-600">
                          Bathrooms
                          </label>
                          <input
                            type="text"
                            id="bathrooms"
                            name="bathrooms"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Number of bathrooms"
                            required
                            value={bathrooms}
                            onChange={(e) => setBathrooms(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="metters" className="block text-sm font-medium text-gray-600">
                          Metters
                          </label>
                          <input
                            type="text"
                            id="metters"
                            name="metters"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Number of metters"
                            required
                            value={metters}
                            onChange={(e) => setMetters(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                          Price
                          </label>
                          <input
                            type="text"
                            id="price"
                            name="price"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                          Description
                          </label>
                          <input
                            type="text"
                            id="description"
                            name="description"
                            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Description"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                        <div>
                          <label htmlFor="images" className="block text-sm font-medium text-gray-600">
                          Best Image of the room
                          </label>
                          <label className="cursor-pointer bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
                            Choose Files
                          </label>
                          <input
                            type="file"
                            id="images"
                            name="images"
                            className="hidden"
                            accept="image/*"
                            multiple
                            onChange={setImages}/>
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded bg-[#303ab2] px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                          Register Room
                        </button>
                      </form>
                    </div>
                </div>
                

            <Footeras> </Footeras>
        </LogProvider>
    )

}