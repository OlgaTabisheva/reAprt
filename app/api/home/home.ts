export async function getServerSideProps(context) {
    const items = [];
    const querySnapshot = await firestore.collection('smart_categories').get();
    querySnapshot.forEach((doc:any) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  
    return {
      props: { items }, // will be passed to the page component as props
    };
  }