import React from "react";
import {
    Modal,
    View,
    Text,
    Button,
    StyleSheet
} from "react-native"

interface ModalViewType {
    isvisible : boolean,
    onClose: Function,
    item: object
}


const ModalView = ({ isvisible, onClose, item }: ModalViewType) => {

    console.log('noooo',isvisible)

    return (
        < Modal
            visible={isvisible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.detail}>JobDetails: {item.title}</Text>
                    <Text style={styles.position}>Position: {item.id}</Text>
                    <Button title="Apply" onPress={()=>onClose(item)} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    modalText: {
        marginBottom: 20,
        fontSize: 18,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    detail: {
        fontSize: 14,
        color: '#333',
    },
    position: {
        fontSize: 14,
        color: '#333',
    }
});

export default ModalView;