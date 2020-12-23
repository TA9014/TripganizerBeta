import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import UserProfile from '../Pages/UserProfile'
import CreateTrip from '../Pages/CreateTrip'
import Trip from '../Pages/TripPage'
import TripInfo from '../Pages/TripInfoPage'
import CreateShoppingList from '../Pages/CreateShoppingList'
import AccountBalance from '../Pages/AccountBalance'
import TripMember from '../Pages/TripMember'
import ShoppingList from '../Pages/ShoppingList'
import Gallery from '../Pages/Gallery'
import WalkieTalkie from '../Pages/WalkieTalkie'


const components = {
    login: {
        path: "/login",
        page: Login
    },
    register: {
        path: "/register",
        page: Register
    },
    userProfile: {
        path: "/userProfile",
        page: UserProfile
    },
    home: {
        path: "/" || "/home",
        page: Homepage
    },
    createTrip: {
        path: "/createTrip",
        page: CreateTrip
    },
    trip: {
        path: "/trip",
        page: Trip
    },
    tripInfo: {
        path: "/tripInfo",
        page: TripInfo
    },
    createShoppingList: {
        path: "/createShoppingList",
        page: CreateShoppingList
    },
    account: {
        path: "/account",
        page: AccountBalance
    },
    tripMember: {
        path: "/tripMember",
        page: TripMember
    },
    shoppingList: {
        path: "/shoppingList",
        page: ShoppingList
    },
    gallery: {
        path: "/gallery",
        page: Gallery
    },
    talkie: {
        path: "/walkietalkie",
        page: WalkieTalkie
    }
}

const roles = {
    GUEST: [
        components.home,
        components.login,
        components.register,
    ],

    USER: [
        components.home,
        components.createTrip,
        components.trip,
        components.tripInfo,
        components.userProfile,
        components.account,
        components.createShoppingList,
        components.tripMember,
        components.shoppingList,
        components.gallery,
        components.talkie,
    ]
};

export default roles;
