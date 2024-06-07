import { media } from "../../constants/media";

const ProfileCard = () => {
  return (
    <section className="mx-4 mt-4 flex flex-col items-center justify-center rounded-xl bg-twilightIndigo p-4 md:mx-0 md:ml-8 lg:mx-0 lg:ml-12">
      <img
        src={media.profilePicture}
        alt="profile-picture"
        className="mb-6 h-44 rounded-xl"
      />
      <div className="flex flex-col">
        <div className="mb-4 flex items-center">
          <img src={media.pin} alt="pin" className="mr-2 h-5 w-5" />
          <p>Carolina, Puerto Rico</p>
        </div>
        <div className="mb-4 flex items-center">
          <img src={media.language} alt="pin" className="mr-2 h-5 w-5" />
          <p>Spanish, English</p>
        </div>
      </div>
      <a
        href={media.cv}
        download
        className="flex w-28 items-center justify-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        aria-label="Download Resume"
      >
        <img src={media.download} alt="download" className="mr-2 h-4 w-4" />{" "}
        Resume
      </a>
    </section>
  );
};

export default ProfileCard;
