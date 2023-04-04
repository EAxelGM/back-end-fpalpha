import { response } from "../../helpers";
import BookRead from "../../models/BookRead";

export const estadisticas = async (req, res) => {
  try {
    const books_read = await BookRead.find({});

    const total_pages_read = books_read.reduce(
      (a, b) => a + parseInt(b.info_open_library.pages || 0),
      0
    );
    const pages_read_average =
      books_read.length === 0
        ? 0
        : (total_pages_read / books_read.length).toFixed(2);

    const qualification_total = books_read.reduce(
      (a, b) => a + parseInt(b.qualification || 0),
      0
    );

    const qualification_average =
      books_read.length === 0
        ? 0
        : (qualification_total / books_read.length).toFixed(2);

    return response(res, {
      data: {
        books_read: books_read.length,
        pages_read_total: total_pages_read,
        pages_read_average,
        qualification_total,
        qualification_average,
      },
    });
  } catch (error) {
    console.log({ error });
    return response(res, { message: error.message, code: 500 });
  }
};
