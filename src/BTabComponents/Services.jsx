import { Box, Card, LinearGradient, ScrollView } from '@gluestack-ui/themed'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { colorGrade1, colorGrade2 } from '../constants/Stylesheet'
import CustomText from '../components/CustomText'
import { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'

const Services =()=>{
  const [services, setServices] = useState();

  useEffect(()=>{
    const unsubscribe = firestore().collection('Services')
    .onSnapshot(querySnaphot => {
      const data = []
      querySnaphot.forEach(documentSnapshot =>{
        const {} = documentSnapshot.data()
        data.push({
          id:documentSnapshot.id
        })
      })
      setServices(data)
    })
    return ()=> unsubscribe();
  },[])
    return(
       <LinearGradient
       colors={[colorGrade1,colorGrade2]}
       as={RNLinearGradient}>
        <Box w={'100%'} h={'30%'}/>
        <Card w={'100%'} h={'80%'} borderTopLeftRadius={30} borderTopEndRadius={30}>
            <ScrollView>
              <CustomText text={"Checking"}/>
            </ScrollView>
        </Card>
       </LinearGradient>
    )
    }
export default Services