import { useSearchParams } from "react-router-dom";
import { bookData } from "../../../helpers";
import { FormikProvider, useFormik } from "formik";
import DashboardLayout from "../../../component/DashboardLayout";
import TextInput from "../../../component/TextInput";
import FileInput from "../../../component/FileInput";
import { Button } from "../../../component/Button";

const AddBook = () => {
  const [searchParams] = useSearchParams();
  const author = searchParams.get("author");
  const data = bookData.find((_data) => _data.author === author);
  console.log(data, "data", author);
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      cover_image: author ? data?.imageLink : "",
      title: data?.title ?? "",
      ISBN: "",
      revision_number: "",
      published_date: author ? data?.title : "",
      publisher: "",
      author: author ? data?.author : "",
      date_added: "",
      genre: "",
    },
    onSubmit: async (values) => {
      console.log(values, "values");
    },
  });
  console.log(form.values, "form values");

  return (
    <DashboardLayout role="librarian">
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit} className="flex flex-col gap-5 p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold font-2xl">
                  {author ? "Update" : "Add"} Book
                </h1>
                <div>
                  <Button
                    btnText={`${author ? "Update" : "Add"} Book`}
                    btnType="submit"
                    className="px-10"
                  />
                </div>
              </div>

              <div className="w-2/3 mt-14 space-y-5">
                <div className="flex items-center justify-center">
                  <FileInput />
                </div>
                <TextInput
                  type="text"
                  placeholder="Title"
                  className="border-gray-300 border-2 bg-white"
                  //   {...form.getFieldProps("title")}
                  name="title"
                />
                <TextInput
                  type="text"
                  placeholder="ISBN"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Revision Number"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Published Date"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Publisher"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Author"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Date Added"
                  className="border-gray-300 border-2 bg-white"
                />
                <TextInput
                  type="text"
                  placeholder="Genre"
                  className="border-gray-300 border-2 bg-white"
                />
              </div>
            </div>
          </div>
        </form>
      </FormikProvider>
    </DashboardLayout>
  );
};

export default AddBook;
