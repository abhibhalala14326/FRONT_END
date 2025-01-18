import { useState } from "react";

// Mock implementation of the addToCart function
async function addToCart(itemID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Item ${itemID} added to cart!`);
    }, 2000); // Simulate a 2-second network request
  });
}

// Custom hook to manage action state
function useActionState(action, initialMessage = "") {
  const [message, setMessage] = useState(initialMessage);
  const [isPending, setIsPending] = useState(false);

  const formAction = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const itemID = event.target.itemID.value; // Get the item ID from the form input

    setIsPending(true);
    try {
      const result = await action(itemID); // Call the action function
      setMessage(result); // Update the message with the result
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsPending(false); // Reset pending state
    }
  };

  return [message, formAction, isPending];
}

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart);

  return (
    <form onSubmit={formAction} className="p-4 border rounded shadow-md mb-4">
      <h2 className="text-lg font-bold mb-2">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
    </form>
  );
}

export default function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </div>
  );
}
