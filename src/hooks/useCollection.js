import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/configs'

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        const unsubcribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => results.push({ ...doc.data(), id: doc.id }))
            setDocuments(results)
            setError(null)
        }, (err) => {
            console.log(err.message)
            setError('Could not fetch the data')
        })

        return () => unsubcribe()

    }, [collection])

    return { documents, error }
}