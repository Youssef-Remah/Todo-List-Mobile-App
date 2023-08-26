import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    inputFieldStyle:{

        marginTop: 20,

        marginBottom: 20,

        marginRight: 20,

        width:250,

        maxHeight:60,

        backgroundColor: 'aliceblue',

    },

    addButtonStyle:{

        marginTop: 25,

        marginBottom: 20,

        marginLeft: 20,

        marginRight: 20,

        width:100,

        height: 50,

    },

    listTitleStyle:{

        marginTop: 50,

        marginBottom: 20,

        fontSize: 25,
    },

    listItemStyle:{

        margin: 20,    

        width: 360,

        height: 70,
        
        backgroundColor: 'lavender',

        borderRadius: 35,

        flexDirection:'row',

        justifyContent:'space-between',

        alignItems: 'center',

        paddingHorizontal: 15

    }

});

export default style;