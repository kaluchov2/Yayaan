import React, {useState} from 'react'
import './graph.scss'
function Resumen(){
const [promedio, setPromedio]= useState({
    preg1: 0,
    preg2: 0,
    preg3: 0,
    preg4: 0,
    preg5: 0,
    preg6: 0,
    preg7: 0,
})
    
const PROM = (v1,v2,v3,v4,v5,v6,v7) =>{
    let p = v1+v2+v3+v4+v5+v6+v7
    console.log(p)
    return p
}
    

    return(
        <div class="grid mx-20">
        <p class="text-center mb-5"> Llena esl siguiente cuestionario </p>
    
        <p class="text-center font-bold mb-10">
            Recuerda monitorear tus resultados y solicitar ayuda profesional en caso de necesitarla
        </p>
    
        
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-18 sm:px-18 md:px-8 py-8 my-8 ml-64 w-6/12 ">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 1
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Me queje de algo durante el dia
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 1})}></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg1: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 2
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Evite realizar responsabilidades
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 1})}></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg2: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 3
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Tuve alguna discusion
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 1})} ></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg3: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 4
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Vi algo en redes sociales que me parecio incomodo
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 1})}></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg4: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 5
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Hice alguna actividad no deportiva que me gusta
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 1})}></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg5: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 6
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Hice ejercicio
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox'onClick={() => setPromedio({...promedio,preg6: 1})} ></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg6: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 px-4 sm:px-4 md:px-4 py-4 my-6 w-6/12 ml-64">
            <div class="grid grid-cols-8 gap-3">
              
               
    
              
                <div class="col-span-10 sm:col-start-1 sm:col-end-7 px-3 sm:px-0">
                    
    
                    <div class="flex justify-between items-center hidden sm:block">
                        <span class="font-light text-gray-600">
                            Pregunta 7
                        </span>
                    </div>
    
                    <div class="mt-2">
                        
                            Escuche o vi alguna noticia positiva
                        <p class="mt-2 text-gray-600 text-sm md:text-md">
                            Del 1 al 8 siendo 8 el mas alto
                        </p>
                    </div>
    
                    
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        
                        <div class="col-span-12 lg:col-span-8">
                            
                                <div class="inline-block rounded-full text-white 
                                bg-red-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">1 </div>
                            
                            <input type='checkbox' onClick={() => setPromedio({ ...promedio,preg7: 1})}></input>
                            <div class="inline-block rounded-full text-white 
                                bg-yellow-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">2 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 2})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-yellow-900 hover:bg-yellow-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">3 </div>
                                 <input type='checkbox'  onClick={() => setPromedio({...promedio,preg7: 3})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">4 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 4})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-pink-400 hover:bg-pink-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">5</div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 5})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-gray-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">6 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 6})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-green-400 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">7 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 7})}></input>
                                 <div class="inline-block rounded-full text-white 
                                bg-blue-900 hover:bg-red-500 duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">8 </div>
                                 <input type='checkbox' onClick={() => setPromedio({...promedio,preg7: 8})}></input>
                           
                        </div>
    
                        
                        <div class="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                           
    
                                <div class="text-gray-600 font-bold text-sm hover:underline">
                                    Yayaan Team
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={() => PROM(promedio.preg1,promedio.preg2,promedio.preg3,promedio.preg4,promedio.preg5,promedio.preg6,promedio.preg7)}>Subir Resumen</button>
    </div>
    )
}
export default Resumen;

