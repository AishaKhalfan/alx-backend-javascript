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
    let photo;
    let user
    try{
        photo = await uploadPhoto();
        user = await createUser();
    }catch(error){
        photo = null;
        user = null;
    }
    //return {photo: user} outputs the line below
    //{ photo: { firstName: 'Guillaume', lastName: 'Salva' } }
    return {photo, user}
    }
const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

