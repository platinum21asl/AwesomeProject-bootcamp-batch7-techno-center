import { View } from 'react-native'
import React from 'react'

import Text from '../../components/Text'

export default function Home() {
  return (
      
      <View style={{marginLeft: 12, marginTop: 40}}>
        <Text fontSize={14} bold regular> Ini adalah Halaman Home</Text>
         {/* <HomeIcon width={120} height={40} fill={"#000"} />  */}
      </View>
  )
}