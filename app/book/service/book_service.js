// Get All Product
export const getAllBookService = async () => {
    try {
      const res = await fetch(
        "https://nextjs-homework005.vercel.app/api/book"
      );
      const data = await res.json();
      // console.log(data);
      
      return data;
    } catch (error) {
      console.log(error);
    }
  };


  export const getBookByIdService = async (id) => {
    try {
      const res = await fetch(
        `https://nextjs-homework005.vercel.app/api/book/${id}`
      );
      const data = await res.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.log(error);
    }
  }