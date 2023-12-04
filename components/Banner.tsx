'use client'
import CountUp from "react-countup";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
function Banner() {
  const [data, setData] = useState([])
  const fetchData=async()=>{
    const colRef = collection(db, 'users')
    onSnapshot(colRef,snapshot=>{
      const users:any = []
      snapshot.docs.forEach(user=>{
        users.push({data: user.data(), id: user.id})
      })
      setData(users)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="lg:text-7xl text-4xl bg-gradient-to-r bg-clip-text text-transparent from-black to-yellow-600">Mosi-oa-Tunya Guide</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Tourists
          </span>{" "}
          favourite Blog in LivingStone
        </h2>
        <div className="flex gap-3 top-5 relative">
          <h1 className="text-yellow-500 text-lg">Site Visitors: </h1>
          <CountUp
          end={data.length}
          duration={2.75}
          style={{fontSize:18}}
        />
        </div>
        
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Events | The latest in technology | The weekly News and Updates
      </p>
    </div>
  );
}

export default Banner;
