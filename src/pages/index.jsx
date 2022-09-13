import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import ServiceArea from "@containers/services/layout-01";

const data = {
    section: "service-section",
    section_title: {
        title: "Create and sell your NFTs",
    },
    items: [
        {
            id: 1,
            title: "Set up your wallet",
            path: "/",
            subtitle: "Step-01",
            description:
                "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
            images: [
                {
                    src: "/images/icons/shape-7.png",
                },
            ],
        },
        {
            id: 2,
            title: "Create your collection",
            path: "/collections",
            subtitle: "Step-02",
            description:
                "A great collection of beautiful website templates for your need. Choose the best suitable template.",
            images: [
                {
                    src: "/images/icons/shape-1.png",
                },
            ],
        },
        {
            id: 3,
            title: "Add your NFT's",
            path: "/create-nft",
            subtitle: "Step-03",
            description:
                "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.",
            images: [
                {
                    src: "/images/icons/shape-5.png",
                },
            ],
        },
        {
            id: 4,
            title: "Sell Your NFT's",
            path: "/",
            subtitle: "Step-04",
            description:
                "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.",
            images: [
                {
                    src: "/images/icons/shape-6.png",
                },
            ],
        },
    ],
};

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => (
    <Wrapper>
        <SEO pageTitle="Home Default" />
        <Header />
        <div id="main-content">
            <ServiceArea data={data} />
        </div>
        <Footer />
    </Wrapper>
);

export default Home;
