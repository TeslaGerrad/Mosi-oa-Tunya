import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function UploadData() {
  const uploadDataToCollection = async()=>{
    const req = await fetch('http://localhost:3000/api/getAddress');
    const data = await req.json();
    console.log(data)
    try {
      // Reference to the collection
      const collectionRef = collection(db, 'users');

      // Add a new document with the provided data
      const docRef = await addDoc(collectionRef, {
        date: serverTimestamp(),
        ip: data,
      });

      console.log('Document written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }
  uploadDataToCollection()
    
  };

