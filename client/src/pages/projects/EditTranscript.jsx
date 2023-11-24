import React from "react";
import { ImPencil } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";

const EditTranscript = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="sub-heading mb-4">Edit Transcript</h2>
        <div className="flex gap-2">
          <button className="text-red-500 border-2 border-red-500 font-semibold py-2 px-6 rounded-md w-fit ml-auto">
            Discard
          </button>
          <button className="text-white bg-gray-800 py-2 px-6 rounded-md w-fit ml-auto">
            Save & exit
          </button>
        </div>
      </div>
      <div className="border-2 border-primary rounded-xl pt-2 pb-6 pl-4 pr-8 flex flex-col gap-4 h-[500px]">
        <div className="flex items-center justify-between pr-8">
          <button className="text-white bg-gray-600 py-2 px-4 rounded-full text-xs flex items-center gap-1">
            <ImPencil />
            Edit Mode
          </button>
          <button className="text-primary bg-primaryLight border-2 border-primary font-semibold p-0.5 rounded-full w-fit ml-auto">
            <IoMdSearch />
          </button>
        </div>
        <div className="flex flex-col gap-2 overflow-auto">
          <h3 className="text-primary font-bold text-xl">Speaker</h3>
          <p className="text-lg pr-4">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains On the
            other hand, we denounce with righteous indignation and dislike men
            who are so beguiled and demoralized by the charms of pleasure of the
            moment, so blinded by desire, that they cannot foresee the pain and
            trouble that are bound to ensue; and equal blame belongs to those
            who fail in their duty through weakness of will, which is the same
            as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish. In a free hour, when our
            power of choice is untrammelled and when nothing prevents our being
            able to do what we like best, every pleasure is to be welcomed and
            every pain avoided. But in certain circumstances and owing to the
            claims of duty or the obligations of business it will frequently
            occur that pleasures have to be repudiated and annoyances accepted.
            The wise man therefore always holds in these matters to this
            principle of selection: he rejects pleasures to secure other greater
            pleasures, or else he endures pains.On the other hand, we denounce
            with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire, that they cannot foresee the pain and trouble that are bound
            to ensue; and equal blame belongs to those who fail in their duty
            through weakness of will, which is the same as saying through
            shrinking from toil and pain. These cases are perfectly simple and
            easy to distinguish. In a free hour, when our power of choice is
            untrammelled and when nothing prevents our being able to do what we
            like best, every pleasure is to be welcomed and every pain avoided.
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have
            to be repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection: he
            rejects pleasures to secure other greater pleasures, or else he
            endures pains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditTranscript;
