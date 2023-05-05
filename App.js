import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [address, setAddress] = useState('');
  const [searchText, setSearchText] = useState('');

  const addEmployee = () => {
    setEmployees([...employees, { name, employeeId, address }]);
    setName('');
    setEmployeeId('');
    setAddress('');
    Keyboard.dismiss();
  };

  const deleteEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const updateEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees[index].name = name;
    newEmployees[index].employeeId = employeeId;
    newEmployees[index].address = address;
    setEmployees(newEmployees);
    setName('');
    setEmployeeId('');
    setAddress('');
    Keyboard.dismiss();
  };

  const renderEmployee = (employee, index) => {
    return (
      <View key={index} style={styles.employee}>
        <Text>Name: {employee.name}</Text>
        <Text>Employee ID: {employee.employeeId}</Text>
        <Text>Address: {employee.address}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setName(employee.name);
              setEmployeeId(employee.employeeId);
              setAddress(employee.address);
              deleteEmployee(index);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setName(employee.name);
              setEmployeeId(employee.employeeId);
              setAddress(employee.address);
              deleteEmployee(index);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Employee Database</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        value={employeeId}
        onChangeText={(text) => setEmployeeId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TouchableOpacity onPress={addEmployee} style={styles.button}>
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>
      <Text style={styles.subHeader}>Employee List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Employees"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {filteredEmployees.map(renderEmployee)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },

    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    subHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    searchInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    employee: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    button: {
      backgroundColor: '#4287f5',
      padding: 10,
      borderRadius: 4,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  