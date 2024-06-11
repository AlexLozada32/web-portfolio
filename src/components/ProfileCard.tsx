import { media } from "../../public/media";

const ProfileCard = () => {
  return (
    <section className="mx-4 flex items-center justify-center rounded-xl bg-twilightIndigo p-4 sm:h-fit md:mx-0 md:ml-8 lg:mx-0 lg:ml-12">
      <img
        src={media.profilePicture}
        alt="profile-picture"
        className="h-96 rounded-xl md:h-80"
      />
    </section>
  );
};

export default ProfileCard;
