import { body, circleBig, circleNormal, circleSmall, colorBig, colorNormal, colorSmall, content, imgOne, imgTwo, subtitleFour, subtitleHidden, subtitleOne, subtitleShow, subtitleThree, subtitleTwo, title, titleHidden, titleShow, wrapper } from "./elements";
import { backgroundFrames, circleBigFrame, circleNormalFrame, circleSmallFrame, colorCircleFrame, contentFrames, hiddenFrames, hiddenOneFrames, showFrames, showTwoFrames } from "./frames";
import { timingEffect } from "./timing";

export const animationBody = body.animate(backgroundFrames, timingEffect)

export const animationWrapper = wrapper.animate(backgroundFrames, timingEffect);

export const animationTitle = title.animate(contentFrames, timingEffect)

export const animationContent = content.animate(contentFrames, timingEffect)

export const animationTitleShow = titleShow.animate(hiddenFrames, timingEffect)

export const animationTitleHidden = titleHidden.animate(showFrames, timingEffect)

export const animationSubtitleShow = subtitleShow.animate(hiddenFrames, timingEffect)

export const animationSubtitleHidden = subtitleHidden.animate(showFrames, timingEffect)

export const animationImgOne = imgOne.animate(hiddenOneFrames, timingEffect)

export const animationImgTwo = imgTwo.animate(showTwoFrames, timingEffect)

export const animationSubtitleOne = subtitleOne.animate(hiddenFrames, timingEffect)

export const animationSubtitleTwo = subtitleTwo.animate(showFrames, timingEffect)

export const animationSubtitleThree = subtitleThree.animate(hiddenFrames, timingEffect)

export const animationSubtitleFour = subtitleFour.animate(showFrames, timingEffect)

export const animationCircleSmall = circleSmall.animate(circleSmallFrame, timingEffect)

export const animationCircleNormal = circleNormal.animate(circleNormalFrame, timingEffect)

export const animationCircleBig = circleBig.animate(circleBigFrame, timingEffect)

export const animationColorBig = colorBig.animate(colorCircleFrame, timingEffect)

export const animationColorNormal = colorNormal.animate(colorCircleFrame, timingEffect)

export const animationColorSmall = colorSmall.animate(colorCircleFrame, timingEffect)

animationCircleSmall.pause()

animationCircleNormal.pause()

animationCircleBig.pause()

animationBody.pause()

animationWrapper.pause()

animationTitle.pause()

animationContent.pause()

animationTitleShow.pause()

animationTitleHidden.pause()

animationSubtitleShow.pause()

animationSubtitleHidden.pause()

animationImgOne.pause()

animationImgTwo.pause()

animationSubtitleOne.pause()

animationSubtitleTwo.pause()

animationSubtitleThree.pause()

animationSubtitleFour.pause()

animationColorBig.pause()

animationColorNormal.pause()

animationColorSmall.pause()

export function Animation() {
    if (animationBody.playState === "paused") {
        animationBody.play()
        animationWrapper.play()
        animationTitle.play()
        animationContent.play()
        animationTitleShow.play()
        animationTitleHidden.play()
        animationSubtitleShow.play()
        animationSubtitleHidden.play()
        animationImgOne.play()
        animationImgTwo.play()
        animationSubtitleOne.play()
        animationSubtitleTwo.play()
        animationSubtitleThree.play()
        animationSubtitleFour.play()
        animationCircleSmall.play()
        animationCircleNormal.play()
        animationCircleBig.play()
        animationColorBig.play()
        animationColorNormal.play()
        animationColorSmall.play()
    } else {
        animationBody.reverse()
        animationWrapper.reverse()
        animationTitle.reverse()
        animationContent.reverse()
        animationTitleShow.reverse()
        animationTitleHidden.reverse()
        animationSubtitleShow.reverse()
        animationSubtitleHidden.reverse()
        animationImgOne.reverse()
        animationImgTwo.reverse()
        animationSubtitleOne.reverse()
        animationSubtitleTwo.reverse()
        animationSubtitleThree.reverse()
        animationSubtitleFour.reverse()
        animationCircleSmall.reverse()
        animationCircleNormal.reverse()
        animationCircleBig.reverse()
        animationColorBig.reverse()
        animationColorNormal.reverse()
        animationColorSmall.reverse()
    }
}
