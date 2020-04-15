const {UserService} = require("../../../src/services");
const {UserRepositoryMock} = require("../../mocks");

const {
    UserModelMock: {user, users}
} = require("../../mocks");

describe("User Service", () => {
    beforeEach(() =>{
        jest.clearAllMocks();
    });

    it("Should find user by id", async ()=>{
        const UserRepository = UserRepositoryMock;
        UserRepository.get.mockReturnValue(user);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.get(user._id);
        expect(expected).toMatchObject(user);
    })
})