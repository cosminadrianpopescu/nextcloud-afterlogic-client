<?php
namespace OCA\AfterLogicClient\Controller;
use OCP\AppFramework\ApiController;
use OCP\IConfig;
use OCP\IRequest;

class RestController extends ApiController {
  private $userId;
  private $config;
  private $app;

  public function __construct($AppName, IRequest $request, $UserId, IConfig $config) {
    parent::__construct($AppName, $request);
    $this->app = $AppName;
    $this->userId = $UserId;
    $this->config = $config;
  }

  /**
   * @NoCSRFRequired
   * @NoAdminRequired
   *
   * @param string $id
   */
  public function show($id) {
    $result = $this->config->getUserValue($this->userId, $this->app, $id);
    return $result;
  }

  /**
   * @NoCSRFRequired
   * @NoAdminRequired
   */
  public function create($key, $value) {
    $this->config->setUserValue($this->userId, $this->app, $key, $value);
  }

  /**
   * @NoCSRFRequired
   * @NoAdminRequired
   */
  public function destroy($id) {
    $this->config->deleteUserValue($this->userId, $this->app, $id);
  }
}
