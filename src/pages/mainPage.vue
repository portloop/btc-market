<template>
    <div class="container">
        <div class="cta-section">
            <div class="cta-section__text">
                <div class="cta-section-t__title">
                    Buy, sell and trade crypto today
                </div>
                <div class="cta-section-t__description">
                    Trade with confidence and build your future with Australia’s fastest crypto exchange.
                </div>
                <div class="cta-section-t__buttons">
                    <greenButton buttonText="Get started" class="btn" to="/start" />
                    <transparentButton buttonText="View exchange" class="btn" to="/desired-route" />
                </div>
                <div class="cta-section__review">
                    <div class="icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M0 0H20V20H0V0Z" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_1_47" transform="scale(0.025)" />
                                </pattern>
                                <image id="image0_1_47" width="40" height="40"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg>
                    </div>
                    <div class="stars">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_48)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.24438 0C7.76679 0 8.24875 0.271746 8.50577 0.711217L10.27 3.72787L13.318 4.30406C13.849 4.40444 14.2779 4.78235 14.4302 5.28403C14.5824 5.78571 14.4327 6.32757 14.0419 6.68916L11.7237 8.83429L12.26 12.3986C12.3378 12.9156 12.1111 13.4315 11.6722 13.7366C11.2332 14.0416 10.6549 14.0851 10.1724 13.8494L7.24438 12.4188L4.31636 13.8494C3.83382 14.0851 3.25557 14.0416 2.8166 13.7366C2.37763 13.4315 2.15099 12.9156 2.22879 12.3986L2.76509 8.83429L0.446822 6.68916C0.0560427 6.32757 -0.0936678 5.78571 0.0585983 5.28403C0.210864 4.78235 0.639734 4.40444 1.17073 4.30406L4.21874 3.72787L5.98299 0.711217C6.24001 0.271746 6.72197 0 7.24438 0Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_48">
                                    <rect width="15" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_48)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.24438 0C7.76679 0 8.24875 0.271746 8.50577 0.711217L10.27 3.72787L13.318 4.30406C13.849 4.40444 14.2779 4.78235 14.4302 5.28403C14.5824 5.78571 14.4327 6.32757 14.0419 6.68916L11.7237 8.83429L12.26 12.3986C12.3378 12.9156 12.1111 13.4315 11.6722 13.7366C11.2332 14.0416 10.6549 14.0851 10.1724 13.8494L7.24438 12.4188L4.31636 13.8494C3.83382 14.0851 3.25557 14.0416 2.8166 13.7366C2.37763 13.4315 2.15099 12.9156 2.22879 12.3986L2.76509 8.83429L0.446822 6.68916C0.0560427 6.32757 -0.0936678 5.78571 0.0585983 5.28403C0.210864 4.78235 0.639734 4.40444 1.17073 4.30406L4.21874 3.72787L5.98299 0.711217C6.24001 0.271746 6.72197 0 7.24438 0Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_48">
                                    <rect width="15" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_48)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.24438 0C7.76679 0 8.24875 0.271746 8.50577 0.711217L10.27 3.72787L13.318 4.30406C13.849 4.40444 14.2779 4.78235 14.4302 5.28403C14.5824 5.78571 14.4327 6.32757 14.0419 6.68916L11.7237 8.83429L12.26 12.3986C12.3378 12.9156 12.1111 13.4315 11.6722 13.7366C11.2332 14.0416 10.6549 14.0851 10.1724 13.8494L7.24438 12.4188L4.31636 13.8494C3.83382 14.0851 3.25557 14.0416 2.8166 13.7366C2.37763 13.4315 2.15099 12.9156 2.22879 12.3986L2.76509 8.83429L0.446822 6.68916C0.0560427 6.32757 -0.0936678 5.78571 0.0585983 5.28403C0.210864 4.78235 0.639734 4.40444 1.17073 4.30406L4.21874 3.72787L5.98299 0.711217C6.24001 0.271746 6.72197 0 7.24438 0Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_48">
                                    <rect width="15" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_48)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.24438 0C7.76679 0 8.24875 0.271746 8.50577 0.711217L10.27 3.72787L13.318 4.30406C13.849 4.40444 14.2779 4.78235 14.4302 5.28403C14.5824 5.78571 14.4327 6.32757 14.0419 6.68916L11.7237 8.83429L12.26 12.3986C12.3378 12.9156 12.1111 13.4315 11.6722 13.7366C11.2332 14.0416 10.6549 14.0851 10.1724 13.8494L7.24438 12.4188L4.31636 13.8494C3.83382 14.0851 3.25557 14.0416 2.8166 13.7366C2.37763 13.4315 2.15099 12.9156 2.22879 12.3986L2.76509 8.83429L0.446822 6.68916C0.0560427 6.32757 -0.0936678 5.78571 0.0585983 5.28403C0.210864 4.78235 0.639734 4.40444 1.17073 4.30406L4.21874 3.72787L5.98299 0.711217C6.24001 0.271746 6.72197 0 7.24438 0Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_48">
                                    <rect width="15" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_56)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.1377 7.71589C10.7586 8.05478 10.5769 8.56269 10.6552 9.06516L11.19 12.4985C11.1823 12.4971 11.176 12.495 11.1715 12.4928L8.14018 11.0623C7.93751 10.9666 7.71875 10.9188 7.5 10.9188V1.5C7.51513 1.5 7.52648 1.503 7.53345 1.50576L9.34927 4.50477C9.57161 4.87199 9.94064 5.12636 10.363 5.20347L13.3405 5.74715L11.1377 7.71589ZM8.8059 0.711217L10.6324 3.72787L13.788 4.30406C14.3377 4.40444 14.7817 4.78234 14.9393 5.28403C15.097 5.78571 14.942 6.32757 14.5374 6.68916L12.1373 8.83429L12.6926 12.3986C12.7731 12.9156 12.5385 13.4315 12.084 13.7366C11.6296 14.0416 11.0309 14.0851 10.5313 13.8494L7.5 12.4188L4.46866 13.8494C3.9691 14.0851 3.37044 14.0416 2.91598 13.7366C2.46153 13.4315 2.22689 12.9156 2.30743 12.3986L2.86265 8.83429L0.462589 6.68916C0.0580202 6.32757 -0.0969728 5.78571 0.0606659 5.28403C0.218305 4.78234 0.662307 4.40444 1.21204 4.30406L4.3676 3.72787L6.1941 0.711217C6.46019 0.271746 6.95916 0 7.5 0C8.04084 0 8.53981 0.271746 8.8059 0.711217Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_56">
                                    <rect width="15" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div class="rating">
                        4.6
                    </div>
                </div>
            </div>
            <div class="cta-section__image">
                <img src="../assets/images/phone.webp" alt="">
            </div>
        </div>

    </div>
</template>
<script>

import transparentButton from '../components/transparentButton.vue';
import greenButton from '../components/greenButton.vue'

export default {
    components: {
        transparentButton,
        greenButton,
    }

}
</script>
<style scoped>
@import url(../assets/css/cta-section.css);

</style>