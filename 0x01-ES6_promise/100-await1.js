 function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
async function asyncUploadUser(){
    //return 
    const result = await([uploadPhoto(), createUser()]);
    console.log(result);
    }
const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
