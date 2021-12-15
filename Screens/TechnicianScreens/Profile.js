import React from 'react';
import { View, Text, FlatList,} from 'react-native';
import ImagePick from '../../Components/ImagePick';
import Images3 from '../../Components/Images3';
import Header3 from '../../Components/Header3';
const Profile = ({navigation}) => {
    const ARR=[ 
        {   
            Name:"RKDash",
            Tel:"9556693650",
            mail:"rptcwork@gmail.com"
        } 
    ]
    const ARR1= [
        {
            IMAGE:require('../../Images/myOrder.png'),
            height:50, width:50,borderRadius:20,backgroundColor:'#dcdcdc', Imgtext:'My Order',
        },
        {
            IMAGE:require('../../Images/adress.png'),
            height:50,width:50,borderRadius:20, backgroundColor:'#dcdcdc', width:50, Imgtext:'Edit Adress'
        },
        {
            IMAGE:require('../../Images/contact.png'),
            height:50,width:50,borderRadius:20, backgroundColor:'#dcdcdc', width:50, Imgtext:'Contact US'
        },
        {
            IMAGE:require('../../Images/lock.png'),
            height:50, width:50, borderRadius:20,left:'-30%',left:'-32%',backgroundColor:'#dcdcdc', Imgtext:'Change Password'
        },
    ]
    return (
        <View style={{width:'100%',height:'100%',marginTop:'6%',alignItems:'center',backgroundColor:'#fff'}}>
            <View style={{width:'100%',height:'10%',justifyContent:'center',}}>
                <Header3 txt='HandiMan' txt2="SambalPur" Iconname1="menu" Iconname2="location-outline"  />
            </View>
            <View style={{height:'40%',width:'100%',backgroundColor:'#FFD943',bottom:'2%'}}></View>

            {/* <View>
                <ImagePick/>
            </View> */}
            <View style={{height:'10%',width:'100%',justifyContent:'center',}}>
                <FlatList
                    data={ARR}
                    keyExtractor={(item)=>item.mail}
                    renderItem={({item})=>(
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>{item.Name}</Text>
                            <Text style={{fontWeight:'bold',fontSize:16}}>{item.Tel}</Text>
                            <Text style={{fontWeight:'bold',fontSize:16}}>{item.mail}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={{height:'30%',width:'100%',justifyContent:'center',}}>
                <FlatList
                    data={ARR1}
                    numColumns='2'
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <Images3 item={item} 
                    onPress={()=>navigation.navigate("OrderDetailScreen")}
                    />}
                />
            </View>
        </View>
    );
};
export default Profile;