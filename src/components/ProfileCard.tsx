import { media } from "../../constants/media";

const ProfileCard = () => {
  return (
    <section className="mx-4 mt-4 flex items-center justify-center rounded-xl bg-twilightIndigo p-4 md:mx-0 md:ml-8 sm:h-fit lg:mx-0 lg:ml-12">
      <img
        src={media.profilePicture}
        alt="profile-picture"
        className="h-96 rounded-xl md:h-80"
      />
    </section>
  );
};

export default ProfileCard;
