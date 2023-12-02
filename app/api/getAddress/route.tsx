'use server'
import os from 'os';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(request:NextRequest){
    const info = getAddress()
    console.log(info)
    
    return NextResponse.json(info)
    
}

function getAddress() {
    const info = os.networkInterfaces();
    for (const interfaceName in info) {
      const addresses: os.NetworkInterfaceInfo[] | undefined = info[interfaceName];
      for (const address of addresses!) {
        if (address.family === "IPv4" && !address.internal) {
            return address.address;
        }
      }
    }
    return null
}