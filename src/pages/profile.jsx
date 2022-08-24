import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import AuthorProfileArea from "@containers/author-profile";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Profile = () => (
    <Wrapper>
        <SEO pageTitle="Profile" />
        <Header />
        <main id="main-content">
            <AuthorProfileArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Profile;
