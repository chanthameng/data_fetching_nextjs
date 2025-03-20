import React from "react";
import { getAllBookService } from "./service/book_service";
import Card from "@/components/card";
import { Layout } from "@/components/Layout";

const BookPage = async () => {
  const data = await getAllBookService();
  const payload = data.payload;
  console.log(data.payload);

  return (

    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {payload?.map((book) => (
        <div key={book.id} style={{ flex: "1 0 21%", boxSizing: "border-box" }}>

          <Card data={book} />
        </div>
      ))}
    </div>
  );
};

export default BookPage;
