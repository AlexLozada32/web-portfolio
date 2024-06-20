import { media } from "../../public/media";

const ProfilePicture = () => {
  return (
    <section className="card-template flex items-center justify-center md:h-[370px] lg:mx-0 lg:ml-12">
      <img
        src={media.profilePicture}
        alt="profile-picture"
        className="h-96 rounded-xl md:h-80"
      />
    </section>
  );
};

export default ProfilePicture;
