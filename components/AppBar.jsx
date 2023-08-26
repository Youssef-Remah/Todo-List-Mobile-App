import { Appbar } from 'react-native-paper';

function AppBar() {
    return (

        <Appbar.Header style={{backgroundColor:'lavender'}}>

            <Appbar.Content title='My ToDO List' style={{alignItems:'center'}}/>

        </Appbar.Header>
        
    );
}

export default AppBar;