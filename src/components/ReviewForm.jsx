// Review submission form component
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReviewSchema = Yup.object().shape({
  rating: Yup.number().min(1).max(5).required("Required"),
  comment: Yup.string().min(10, "Too short").required("Required"),
});

export default function ReviewForm({ productId, onSubmit }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
      <Formik
        initialValues={{ rating: 5, comment: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          onSubmit({ ...values, productId });
          actions.resetForm();
        }}
      >
        <Form className="space-y-4">
          <div>
            <label className="block font-medium">Rating (1 to 5)</label>
            <Field
              as="select"
              name="rating"
              className="block w-full border rounded px-3 py-2"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </Field>
            <ErrorMessage name="rating" component="div" className="text-red-500" />
          </div>

          <div>
            <label className="block font-medium">Comment</label>
            <Field
              as="textarea"
              name="comment"
              rows="4"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage name="comment" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Review
          </button>
        </Form>
      </Formik>
    </div>
  );
}
