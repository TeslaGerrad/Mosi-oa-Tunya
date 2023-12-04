import { collection, addDoc, serverTimestamp,where,query,getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function UploadData() {
  const uploadDataToCollection = async()=>{
    const req = await fetch('http://localhost:3000/api/getAddress');
    const data = await req.json();
    console.log(data)
    try {
      // Reference to the collection
      const collectionRef = collection(db, 'users');

      const queryData = query(collectionRef, where('ip', '==', data));

      const querySnapshot = await getDocs(queryData);

      if (querySnapshot.size > 0) {
          console.log('User already exists');
        // Handle the case where the email is not unique
      } else {
        // Add the new document
       // Add a new document with the provided data
      const docRef = await addDoc(collectionRef, {
        date: serverTimestamp(),
        ip: data,
      });
      console.log('Document written with ID:', docRef.id);
    }      
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }
  uploadDataToCollection()
    
  };

