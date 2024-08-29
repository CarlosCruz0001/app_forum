import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
})