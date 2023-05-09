import Button from '../components/Button';
import { useGetSingleUser } from '../hooks/useGetSingleUser';

function EditProfileInputForm() {
  // fetch user data using axios from backend
  const user = useGetSingleUser('048338d5-5cb9-4e5d-8129-aaf8d5d33395');

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-36 p-4 h-full content-between justify-between"
    >
      <div className="flex flex-col gap-5 p-4">
        <div>
          <label
            htmlFor="Change first name"
            className="text-white dark:text-dark text-lg"
          >
            {user?.data?.firstName}
          </label>
          <input
            type="text"
            name="Change first name"
            id="Change first name"
            placeholder="Change your name"
            className="w-full rounded-lg bg-dark-light h-[48px] flex items-center justify-between p-5 gap-5 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="Change last name"
            className="text-white text-lg dark:text-dark"
          >
            {user?.data?.lastName}
          </label>
          <input
            type="text"
            name="Change last name"
            id="Change last name"
            placeholder="Change your last name"
            className="w-full rounded-lg bg-dark-light h-[48px] flex items-center justify-between p-5 gap-5 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="Change email"
            className="text-white text-lg dark:text-dark"
          >
            {user?.data?.email}
          </label>
          <input
            type="email"
            name="Change email"
            id="Change email"
            placeholder="Change your email"
            className="w-full rounded-lg bg-dark-light h-[48px] flex items-center justify-between p-5 gap-5 dark:text-white"
          />
        </div>
      </div>
      <Button size="md">Save Changes</Button>
    </form>
  );
}

export default EditProfileInputForm;
